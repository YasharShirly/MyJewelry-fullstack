import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Windows from "./Windows";
import OneProduct from "./OneProduct";

import './ProductList.css';

export default function ProductList() {
    let [arr, setArr] = useState([]);
    let [numButtons, setNumButtons] = useState(1);
    let [currentNumPage, setCurrentNumPage] = useState(1);
    // let [productForEdit,setProductForEdit]=useState(null);


    function getNumPages() {
        axios.get("http://localhost:5000/prouduct/numpages?perpage=3")
            .then(res => {
                console.log(res.data.totalPages + " " + currentNumPage);
                if (currentNumPage > res.data.totalPages) {
                    let c = currentNumPage;
                    c--;
                    setCurrentNumPage(c);
                }
                setNumButtons(res.data.totalPages);
            })
            .catch(err => {
                console.log(err)
                alert("תקלה בשליפת כמות עמודים " + err.message)
            })
    }

    useEffect(() => {
        getNumPages();
        // axios.get("http://localhost:5000/prouduct/numpages?perpage=3")
        //     .then(res => {
        //         console.log(res);
        //         setNumButtons(res.data.totalPages)
        //     })
        //     .catch(err => {
        //         console.log(err)
        //         alert("תקלה בשליפת כמות עמודים " + err.message)
        //     })
    }, [])

    function deleteFromList(id) {
        let copyArr = [...arr];
        let index = copyArr.findIndex(i => i.idproducts == id);
        copyArr[index].isActive = "0";
        setArr(copyArr);
        getNumPages();
        // getProductsByPage(currentNumPage);
    }

    useEffect(() => {
        getProductsByPage(1)
    }, [])

    function getProductsByPage(pageNum) {
        if (pageNum > numButtons)
            return;
        axios.get(`http://localhost:5000/prouduct?page=${pageNum}&perpage=3`)
            .then(res => {
                console.log(res.data);
                setArr(res.data);
            })
            .catch(err => {
                console.log(err)
                alert("תקלה בשליפת המוצרים " + err.message)
            })

    }

    let a = [];
    for (let i = 1; i <= numButtons; i++)
        a.push(<input type="button" className={i == currentNumPage ? "active" : "stam"} value={i} key={i} onClick={() => {
            getProductsByPage(i)
            setCurrentNumPage(i)
        }} />)

    let isShow = useSelector(state => state.c.isShow);

    return <div>
        <div >{isShow && <Windows />}</div>
        <h1 id="h1M">My Jewelry</h1>
        <div className="divList">
            {arr.map(item => {
                if (item.isActive == "1")
                    return <OneProduct deleteFromList={deleteFromList} one={item} key={item.idproducts} />
            })}

        </div>
        {a}
    </div>

}