"use client";

import icSearch from "@/assets/images/ic-search.svg";
import * as styles from "./SearchBar.css";
import Image from "next/image";

export default function SearchBar(){
    return (
        <form className={styles.searchForm}>
            <Image src={icSearch} alt="검색 아이콘" width={24} height={24}/>
            <input className={styles.searchInput} type="search" placeholder="검색할 상품을 입력해주세요"/>
        </form>
    )
}