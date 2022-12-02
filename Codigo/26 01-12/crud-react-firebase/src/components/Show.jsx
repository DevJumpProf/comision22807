import { useState,useEffect } from "react";
import {Link} from "react-router-dom"
import {collection,getDocs,deleteDoc,doc} from "firebase/firestore"
import {db} from "../firebaseConfig/firebase.js"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

const MySwal = withReactContent(Swal)

//1 configurar los hooks

//2 referenciamos la base de datos

//3 Funcion para mostrar todos los docs

//4 Funcion para eliminar un doc

// 5 funcion de confirmacion para Sweet alert 2

// 6 utilizamos useEffect


// 7 devolvemos la vista de nuesrto componente