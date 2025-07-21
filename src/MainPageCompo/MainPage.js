import React, { useEffect, useState, useRef } from 'react'
import './MainPage.module.css'
import Navbar from './MainPgNavbar/MainPageNavBar'
import poster from '../Images/Icon/poster.jpg'
import title from '../Images/Icon/title.png'
import play from '../Images/Icon/play.png'
import info from '../Images/Icon/info.png'
function MainPage() {

    const cardListRef = useRef(null);
    const [movies, setMovies] = useState([]);



    // -------------------------------------------Now playing -----------------------------------------------------------------------------------
    async function movieList() {
        const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNGI3MmJlYmJkOTQ1ZDJmYjkwYmY1NzAwYTdjOTZlOSIsIm5iZiI6MTc0OTEwODczMC45NzEsInN1YiI6IjY4NDE0N2ZhZGFlOWMzNzY3MmJmMTJmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pZca3JaIkNVjQ1ENWMY03e0vanBXO2yGdHbc-vsXGRw'
            }
        };
        const response = await fetch(url, options);
        const json = await response.json();

        console.log(json)
        setMovies(json.results)
        return json;
    }

    
    useEffect(() => {
        async function getMovie() {
            const data = await movieList()
            console.log(data.results)
        }; getMovie()
    }, [])


    const scrollRight = () => {
        if (cardListRef.current) {
            cardListRef.current.scrollBy({
                left: cardListRef.current.offsetWidth,
                behavior: 'smooth',
            });
        }
    };

    const scrollLeft = () => {
        if (cardListRef.current) {
            cardListRef.current.scrollBy({
                left: -cardListRef.current.offsetWidth,
                behavior: 'smooth',
            });
        }
    }

    // -------------------------------------------------------------Popular's--------------------------------------------------------------------------------


    async function popularList() {
        const url = "https://api.themoviedb.org/3/movie/changes?page=1"
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMDNhNzVlNWRlNGE3ZWNjZGViODcyNzc2NDc4YzI4MiIsIm5iZiI6MTc0ODg3NTM1OC4yMDIsInN1YiI6IjY4M2RiODVlMDUzNjE5YTdhZGZkYjU2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l1eAvQEN53tCKyY2UBdQVngjznDXrsOMn5aVwArjIzc'
            }
        };

        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json)
        setMovies(json.results)
        return json;
    }

    useEffect(() => {
        async function popularList1() {
            const data = await popularList()
            console.log(data.results)
        }; popularList1()
    }, [])


    return (
        <><div className='home'>
            <Navbar />
            <div className='poster'>
                <img src={poster} className='poster-img'></img>
                <div className='title'>
                    <img src={title} className='title-img'></img>
                    <p>The Protector is an action-packed drama that follows the journey of a young man discovering his destiny as a mystical guardian, tasked with saving his city from dark forces.</p>
                    <div className='btn'>
                        <button className='btn1'><img src={play} />Play</button>
                        <button className='btn1 dark-btn'><img src={info} />info</button>
                    </div>
                </div>
            </div>


            <div className='title-cards'>
                <p>Now playing</p>
                <div className='slider-container'>
                    <button className='prev-btn' onClick={() => scrollLeft()}>&lt;</button>
                    <div className='card-list' ref={cardListRef}>
                        {movies &&
                            movies.map((movie, id) => {
                                return (
                                    <div key={id} className='card'>
                                        <img
                                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                            alt={movie.original_title}
                                        />
                                    </div>
                                );
                            })}
                    </div>
                    <button className='next-btn' onClick={() => scrollRight()}>&gt;</button>
                </div>

                <p>Popular Movies</p>
                <div className='slider-container'>
                    <button className='prev-btn' onClick={() => scrollLeft()}>&lt;</button>
                    <div className='card-list' ref={cardListRef}>
                        {movies &&
                            movies.map((movie, id) => {
                                return (
                                    <div key={id} className='card'>
                                        <img
                                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                            alt={movie.original_title}
                                        />
                                    </div>
                                );
                            })}
                    </div>
                    <button className='next-btn' onClick={() => scrollRight()}>&gt;</button>
                </div>


                <div className='slider-container'>
                    <button className='prev-btn' onClick={() => scrollLeft()}>&lt;</button>
                    <div className='card-list' ref={cardListRef}>
                        {movies &&
                            movies.map((movie, id) => {
                                return (
                                    <div key={id} className='card'>
                                        <img
                                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                            alt={movie.original_title}
                                        />
                                    </div>
                                );
                            })}
                    </div>
                    <button className='next-btn' onClick={() => scrollRight()}>&gt;</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default MainPage;