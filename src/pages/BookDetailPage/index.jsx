import React, { useState, useEffect } from "react";
import BookData from "../../data/book";
import Navbar from "../../components/Navbar";
import BookDetail from "../../components/BookDetail";

const BookDetailPage = () => {
    const [book, setBook] = useState({});

    useEffect(() => {
        setBook(BookData[0]);
    }, []);

    return (
        <>
            <Navbar />
            <BookDetail data={book} />
        </>
    );
};
export default BookDetailPage;