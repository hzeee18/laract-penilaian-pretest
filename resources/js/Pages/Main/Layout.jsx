import React from "react";
import "../../../css/style.css";
import headerImage from "../../src/gambar/header.jpg";
import {Link, usePage} from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

export default function Layout({children}) {
    const { user } = usePage().props.auth
    return(
        <>
        {/* HEADER */}
        <div className="header">
            <img src={headerImage} alt=""/>
            </div>

        {/*  {menu}  */}
        <div className="menu">
            <b>
                <a href="/home">HOME</a>
                {user?.role == 'admin' ? (
                    <>
                    <a href="/guru/index">GURU</a>
                    <a href="/jurusan/index">JURUSAN</a>
                    <a href="/kelas/index">KELAS</a>
                    <a href="/siswa/index">SISWA</a>
                    <a href="/mapel/index">MATA PELAJARAN</a>
                    <a href="/mengajar/index">MENGAJAR</a>
                    </>
                ) : (
                    <a href="/nilai/index">NILAI</a>
                )}
                <a href="/logout">LOGOUT</a>

            </b>
        </div>

        {/* {content} */}
        <div className="content">{children}</div>
        {/* {footer} */}
        <div className="footer">
            <b>
                <p className="mar">2023 - UJIKOM LSP</p>
            </b>
        </div>
        </>
    );
}
