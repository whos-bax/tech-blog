"use client"
import Image from 'next/image'
import styles from './page.module.css'
import {useState} from "react";
import Editor from "@/components/Editor";
import {Container} from "@mui/material";

export default function Home() {
    const [mdInfo, setMdInfo] = useState("#Hello world");

    const createMarkDown = () => {
        // fs.writeFileSync("test.txt", data);
    }
    return (
        <Container maxWidth={"lg"}>
            <Editor
                value={mdInfo}
                onChange={setMdInfo}
            />
        </Container>
    )
}
