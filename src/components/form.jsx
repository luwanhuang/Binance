import React, {useEffect} from 'react';
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import {Container} from 'reactstrap';
import PropTypes from 'prop-types'
import '../styles/formStyle.css'

export default function FormAll(props) {
    var imageStar = "image/star.png"
    var imageStar2 = "image/star2.png"
    var stocks
    //choose what content to form
    var original = props.stocks[props.status];
    if(props.stocks.search.length > 0 && props.status!=="fav"){
        stocks = props.stocks[props.status].filter((coin)=>(coin.symbol.toLowerCase().slice(0,-3).indexOf(props.stocks.search.toLowerCase()) !== -1))
    } else if(props.status==="fav"){
        if(props.stocks.search.length > 0){
            stocks = props.stocks["original"].filter((coin)=>(coin.favorate===1 &&coin.toLowerCase().slice(0,-3).indexOf(props.stocks.search.toLowerCase()) !== -1))
        }else{
            stocks = props.stocks["original"].filter((coin)=>(coin.favorate===1))
        }
    }
    else {
        stocks = original;
    }
    //get data from api.binance
    useEffect(() => {
        // fetch("https://www.binance.com/exchange-api/v1/public/asset-service/product/get-products"
        fetch("https://api.binance.com/api/v3/ticker/24hr"
        )
        .then(res => res.json())
        .then(res=>{
            props.init(res);
        })
    }, [])
    //columns detail for table
    const columns = [
        {headerName: "",
        field: "icon",
        width: 40,
        cellRendererFramework: function(params) {
            return (<span>
                <img className = "in"
                onClick={(event)=>{
                    var a = event.target.src;
                    if(event.target.src.slice(-5,-4)==='r'){
                        event.target.src=a.slice(0,-5) + "r2.png";
                        params.data.favorate=1;
                    }else{
                        event.target.src=a.slice(0,-5) + ".png";
                        params.data.favorate=0;
                    }
                    props.addFav(params.data.symbol);
                    }
                }
            src = {
            params.data.favorate===0?imageStar:imageStar2
            }
            alt = ""
            /></span>)
            },
        },
        { headerName: "Symbol", field: "symbol", sortable: true, filter: true, minWidth: 50,maxWidth: 150, flex:2},
        { headerName: "Symb", field: "sym", sortable: true, filter: true, minWidth: 40,maxWidth: 150, flex:2},
        { headerName: "Percent", field: "percent", sortable: true, filter: true, minWidth: 50,maxWidth: 150, flex:2},
        { headerName: "last", field: "last", sortable: true, filter: true , minWidth: 70,maxWidth: 350, flex:2},
        { headerName: "high", field: "high", sortable: true, filter: true , minWidth: 70,maxWidth: 350, flex:2},
        { headerName: "low", field: "low", sortable: true, filter: true , minWidth: 70,maxWidth: 350, flex:2}
    ];
    //generate table
    var gridOptions = {
        columnDefs:columns,
        rowData:stocks,
        pagination:true,
        paginationPageSize: 24,
        rowClassRules: {
            // row style function
            'percent-up': function(params) {
            var num = params.data.percent;
            return num >= 0;
            },
            // row style expression
            'percent-down': 'data.percent < 0',
        }
    }

    return (
        <Container>
            <div
                className="ag-theme-balham"
                style={{
                    height: "740px",
                    width: "100%"
                }}
            >
                <AgGridReact {...gridOptions}/>
            </div>
        </Container>
    )
}

FormAll.propTypes = {
    status: PropTypes.string.isRequired,
    stocks: PropTypes.object.isRequired,
    init: PropTypes.func.isRequired,
    addFav: PropTypes.func.isRequired,
}


