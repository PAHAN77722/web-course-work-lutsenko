import React, {useEffect, useState} from 'react';
import {Duty} from "../../model/types";
import $api from "../../http";
import {compareDate} from "../../model/compareDate";
import LayoutBlock from "../../component/LayoutBlock/LayoutBlock";
import DutyCard from "../../component/DutyCard/DutyCard";
import Title from "../../component/Title/Title";
import css from "./HistoryPage.module.css";

const HistoryPage = () => {
    const [duties, setDuties] = useState<Duty[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const getDuties = () => {
        $api.get<Duty[]>("/duty").then(res => {
            setDuties(res.data.filter(item => compareDate(item.date) === 1))
        }).then(() => {
            setIsLoading(false)

        }).catch(e => {
            console.log(e)
        })
    }

    const [sortingDirection, setSortingDirection] = useState(false)

    const sortBy = (key: any) => {
        const sortedDuties = [...duties]; // Create a copy of the state
        if (sortingDirection) {
            sortedDuties.sort((x1, x2) => {
                // @ts-ignore
                if (x1[key] < x2[key]) {
                    return -1;
                }
                // @ts-ignore
                if (x1[key] > x2[key]) {
                    return 1;
                }
                return 0;
            });
        }else{
            sortedDuties.sort((x1, x2) => {
                // @ts-ignore
                if (x1[key] > x2[key]) {
                    return -1;
                }
                // @ts-ignore
                if (x1[key] < x2[key]) {
                    return 1;
                }
                return 0;
            });
        }
        setSortingDirection(!sortingDirection)
        setDuties(sortedDuties);
    };


    useEffect(() => {
        getDuties()
    }, []);


    return (
        <>
            <LayoutBlock>
                <Title title={"Список зданих нарядів"}/>
            </LayoutBlock>
            <LayoutBlock>
                <div className={css.header}>
                    <button onClick={()=>{
                        sortBy("date")
                    }} className={css.btn}>Сортувати за датою</button>
                    <button onClick={()=>{
                        sortBy("type")
                    }} className={css.btn}>Сортувати за типом</button>
                    <button onClick={()=>{
                        sortBy("unit")
                    }} className={css.btn}>Сортувати за підрозділом</button>
                </div>
                {isLoading ? <>Loading...</> : duties.map(item => (
                    <DutyCard duty={item}/>
                ))}
            </LayoutBlock>
        </>
    );
};

export default HistoryPage;