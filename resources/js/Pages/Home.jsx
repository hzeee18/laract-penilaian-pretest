import React from "react";
import { usePage } from "@inertiajs/inertia-react";
import Layout from "./Main/Layout";

const Home = () => {
    const { user } = usePage().props.auth;
    console.log("user", user)
    return (
        <>
            <Layout>
                <center>
                    <h1>
                        SELAMAT DATANG DENGAN AKSES USER {" "}
                        {user?.id_admin ?? user?.nip ?? user?.nis}
                    </h1>
                </center>
            </Layout>
        </>
    )
}

export default Home
