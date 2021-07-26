import styled from 'styled-components';

export const Header = styled.header`
    height: 60px;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;

    .logo{
        margin: auto 10px;
    }

    .buttonCadastro{
        height: 40px;
        background: rgb(139, 0, 0);
        border-radius: 5px;
        color: white;
        margin: auto 10px;
        padding: 10px;
        display: inline-block;
        border: none;
        text-decoration: none;
        font-family: sans-serif;
        font-size: 20px;
        cursor: pointer;
        text-align: center;
        -webkit-appearance: none;
        -moz-appearance: none;
    }

    .buttonCadastro:hover{
        height: 40px;
        background-color: white;
        border-radius: 5px;
        color: rgb(139, 0, 0);
        margin: auto 10px;
        padding: 8px;
        display: inline-block;
        border: 2px solid rgb(139, 0, 0);
        text-decoration: none;
        font-family: sans-serif;
        font-size: 20px;
        cursor: pointer;
        text-align: center;
        -webkit-appearance: none;
        -moz-appearance: none;
    }
`

export const Container = styled.div`
    width: 100%;
    margin: auto;
    background: rgba(139, 0, 0);
    height: fit;


    .section1{
        width: 80%;
        margin: auto;
        background: linear-gradient(rgba(255,255,255,.7), rgba(255,255,255,.9)), rgba(139, 0, 0);
        display: flex;
        flex-wrap: wrap;
        padding: 10px;
        justify-content: space-between;


        .productContent{
            display: grid;
            height: 300px;
            background: rgba(139, 0, 0, 0.2);
            border-radius: 10px;
            padding: 12px;
            margin: 20px;

            .horizontal{
                display: flex;
                justify-content: space-between;
            }

            .price{
                color: darkred;
            }

            .addCart{
                height: 15px;
                background: transparent;
                border-radius: 5px;
                color: black;
                margin: 0px;
                padding: 0px 2px;
                text-align: center;
                display: inline-block;
                border: 2px solid rgb(139, 0, 0);
                text-decoration: none;
                font-family: sans-serif;
                font-size: 8px;
                cursor: pointer;
                text-align: center;
                -webkit-appearance: none;
                -moz-appearance: none; 
            }
        }


    };

    .section2{
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url(/bg.jpg);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;

        .cardContainer{
            background-color: #ffffff;
            border-radius: 25px;
            padding: 25px;
            width: 200px;
        }

        form{
            display: grid;
        }

        input{
            width: 100%;
            height: 30px;
            margin-bottom: 10px;
            text-align: left;
            border-radius: 0;
            border-style: hidden;
            background-color: rgba(139, 0, 0, 0.2);
        }

        label{
            color: rgba(139, 0, 0);
            font-weight: bold;
            padding: 5px
        }

        #submitButton{
            width: 50%;
            height: 30px;
            margin: 10px 0;
            text-align: center;
            border-radius: 0;
            border-style: hidden;
            background-color: rgba(139, 0, 0, 0.4);
            color: rgb(87, 1, 1)
        }
    }


`