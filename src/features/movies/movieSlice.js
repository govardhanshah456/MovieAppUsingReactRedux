import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";
export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (term) => {
    const movieText = "Harry";
    const response = await movieApi.get(
        `?apiKey=${APIKey}&s=${term}&type=movie`
    )
        .catch((err) => {
            console.log("Err:", err)
        })
    return response.data;
})
export const fetchAsyncShows = createAsyncThunk(
    "movies/fetchAsyncShows",
    async (term) => {
        const seriesText = "Friends";
        const response = await movieApi.get(
            `?apiKey=${APIKey}&s=${term}&type=series`
        );
        return response.data;
    }
);
export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
    "movies/fetchAsyncMovieOrShowDetail",
    async (id) => {
        const seriesText = "Friends";
        const response = await movieApi.get(
            `?apiKey=${APIKey}&i=${id}&Plot=full`
        );
        return response.data;
    }
);
const initialState = {
    movies: {},
    shows: {},
    selectedMovieOrShow: {},
    loading: false,
}
const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        removeSelectedMovieOrShow: (state) => {
            state.selectedMovieOrShow = {};
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: (state) => {
            return { ...state, loading: true }
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            // state.loading = false;
            console.log("Fetched Movies");
            return { ...state, movies: payload, loading: false };

        },
        [fetchAsyncMovies.rejected]: (state) => {
            // state.loading = false;
            console.log("Rejected");
            return { ...state, loading: false }
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log("Fetched shows");
            return { ...state, shows: payload, loading: false };
        },
        [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
            console.log("Fetched selectedMovieOrShow");
            return { ...state, selectedMovieOrShow: payload };
        },
    }
})

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getLoading = (state) => state.movies.loading
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow
export default movieSlice.reducer