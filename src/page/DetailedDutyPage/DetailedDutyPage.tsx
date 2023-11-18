import React, {useEffect, useState} from 'react';
import css from "./DetailedDutyPage.module.css"
import {useNavigate, useParams} from "react-router-dom";
import {Duty, Serviceman} from "../../model/types";
import $api from "../../http";
import LayoutBlock from "../../component/LayoutBlock/LayoutBlock";
import Title from "../../component/Title/Title";
import {DutyType} from "../../enum/DutyType";
import {MilitaryRanks} from "../../enum/MilitaryRanks";
import {RouterNames} from "../../router/RouterNames";

const DetailedDutyPage = () => {

    const {id} = useParams()

    const [duty, setDuty] = useState<Duty>({} as Duty)
    const [isLoading, setIsLoading] = useState(true)

    const navigate = useNavigate()
    const getDuty = () => {
        $api.get(`/duty/${id}`).then(res => {
            setDuty(res.data)
        }).then(() => {
            setIsLoading(false)
        }).catch(e => {
            console.log(e)
        })
    }

    useEffect(() => {
        getDuty()
    }, []);

    const updateDuty = (e: any) => {
        e.preventDefault()
        $api.put(`/duty/${duty.id}`, duty).then(res => {
            console.log(res)
            navigate(RouterNames.HOME)
        }).catch(e => {
            console.log(e)
        })
    }

    return (
        <>
            {isLoading ? <div>Loading...</div> :
                <>
                    <LayoutBlock>
                        <Title title={"Редагування наряду"}/>
                    </LayoutBlock>

                    {/*<LayoutBlock>*/}
                    {/*    <form onSubmit={() => {*/}
                    {/*    }}>*/}
                    {/*        <div className={css.container}>*/}
                    {/*            <div className={css.containerInput}>*/}
                    {/*                <span>Тип наряду</span>*/}
                    {/*                <select defaultValue={duty.type} required onChange={e => {*/}
                    {/*                    setDuty({...duty, type: e.target.value})*/}
                    {/*                }}>*/}
                    {/*                    {Object.values(DutyType).map(item => (*/}
                    {/*                        <option value={item}>{item}</option>*/}
                    {/*                    ))}*/}
                    {/*                </select>*/}
                    {/*            </div>*/}

                    {/*            <div>*/}
                    {/*                <span className={css.personnelTitle}>Особовий склад       </span>*/}
                    {/*                <span className={css.personnelTitle} style={{cursor: "pointer"}} onClick={() => {*/}
                    {/*                    setDuty({*/}
                    {/*                        ...duty,*/}
                    {/*                        personnel: [...duty.personnel, {rank: MilitaryRanks.PRIVATE} as Serviceman]*/}
                    {/*                    })*/}
                    {/*                }}>*/}
                    {/*    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"*/}
                    {/*         className="bi bi-plus-square" viewBox="0 0 16 16">*/}
                    {/*     <path*/}
                    {/*         d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>*/}
                    {/*      <path*/}
                    {/*          d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>*/}
                    {/*    </svg>*/}
                    {/*</span>*/}
                    {/*                <div className={css.personnelContainer}>*/}
                    {/*                    {duty.personnel.map((item, index) => (*/}
                    {/*                        <div className={css.serviceManCard}>*/}
                    {/*                            {index + 1}.*/}
                    {/*                            <div>*/}
                    {/*                                <div className={css.containerInput}>*/}
                    {/*                <span>*/}
                    {/*                    Звання*/}
                    {/*                </span>*/}
                    {/*                                    <select defaultValue={item.rank} required onChange={e => {*/}
                    {/*                                        item.rank = e.target.value*/}
                    {/*                                        setDuty({...duty, personnel: duty.personnel})*/}
                    {/*                                    }}>*/}
                    {/*                                        {Object.values(MilitaryRanks).map(item => (*/}
                    {/*                                            <option value={item}>{item}</option>*/}
                    {/*                                        ))}*/}
                    {/*                                    </select>*/}
                    {/*                                </div>*/}
                    {/*                                <div className={css.containerInput}>*/}
                    {/*                <span>*/}
                    {/*                    Імʼя*/}
                    {/*                </span>*/}
                    {/*                                    <input defaultValue={item.name} required onChange={e => {*/}
                    {/*                                        item.name = e.target.value*/}
                    {/*                                        setDuty({...duty, personnel: duty.personnel})*/}
                    {/*                                    }} type="text"/>*/}
                    {/*                                </div>*/}

                    {/*                                <div className={css.containerInput}>*/}
                    {/*                <span>*/}
                    {/*                    Фамілія*/}
                    {/*                </span>*/}
                    {/*                                    <input defaultValue={item.surname} required onChange={e => {*/}
                    {/*                                        item.surname = e.target.value*/}
                    {/*                                        setDuty({...duty, personnel: duty.personnel})*/}
                    {/*                                    }} type="text"/>*/}
                    {/*                                </div>*/}
                    {/*                            </div>*/}
                    {/*                            <span style={{cursor: "pointer"}} onClick={() => {*/}
                    {/*                                setDuty({*/}
                    {/*                                    ...duty,*/}
                    {/*                                    personnel: duty.personnel.filter((item, index2) => index2 !== index)*/}
                    {/*                                })*/}
                    {/*                            }}>*/}
                    {/*                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"*/}
                    {/*                     className="bi bi-trash" viewBox="0 0 16 16">*/}
                    {/*                    <path*/}
                    {/*                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>*/}
                    {/*                    <path*/}
                    {/*                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>*/}
                    {/*                </svg>*/}
                    {/*            </span>*/}
                    {/*                        </div>*/}
                    {/*                    ))}*/}
                    {/*                </div>*/}
                    {/*            </div>*/}

                    {/*            <div className={css.containerInput}>*/}
                    {/*                <span>Підрозділ</span>*/}
                    {/*                <input defaultValue={duty.unit} onChange={e => {*/}
                    {/*                    setDuty({...duty, unit: e.target.value})*/}
                    {/*                }}/>*/}
                    {/*            </div>*/}

                    {/*            <div className={css.containerInput}>*/}
                    {/*                <span>Дата наряду</span>*/}
                    {/*                <input defaultValue={new Date(duty.date).getTime()} type={"date"} onChange={e => {*/}
                    {/*                    setDuty({...duty, date: new Date(e.target.value)})*/}
                    {/*                }}/>*/}
                    {/*            </div>*/}

                    {/*        </div>*/}
                    {/*        <div className={css.btnContainer}>*/}
                    {/*            <button type={"submit"}>Назначити</button>*/}
                    {/*        </div>*/}
                    {/*    </form>*/}

                    {/*</LayoutBlock>*/}

                    <LayoutBlock>
                        <form onSubmit={updateDuty}>
                            <div className={css.container}>
                                <div style={{gridColumn: `span ${3}`}}>
                                    <span className={css.personnelTitle}>Особовий склад       </span>
                                    <span className={css.personnelTitle} style={{cursor: "pointer"}} onClick={() => {
                                        setDuty({
                                            ...duty,
                                            personnel: [...duty.personnel, {rank: MilitaryRanks.PRIVATE} as Serviceman]
                                        })
                                    }}>
                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                  className="bi bi-plus-square" viewBox="0 0 16 16">
                                 <path
                                     d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                 <path
                                     d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                 </svg>
                            </span>
                                    <div className={css.personnelContainer}>
                                        {duty.personnel.map((item, index) => (
                                            <div className={css.serviceManCard}>
                                                {index + 1}.
                                                <div>
                                                    <div className={css.containerInput}>
                                                        <span>
                                                            Звання
                                                        </span>
                                                        <select defaultValue={item.rank} required onChange={e => {
                                                            item.rank = e.target.value
                                                            setDuty({...duty, personnel: duty.personnel})
                                                        }}>
                                                            {Object.values(MilitaryRanks).map(item => (
                                                                <option value={item}>{item}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    <div className={css.containerInput}>
                                                        <span>
                                                            Імʼя
                                                        </span>
                                                        <input defaultValue={item.name} required onChange={e => {
                                                            item.name = e.target.value
                                                            setDuty({...duty, personnel: duty.personnel})
                                                        }} type="text"/>
                                                    </div>

                                                    <div className={css.containerInput}>
                                                        <span>
                                                            Фамілія
                                                        </span>
                                                        <input defaultValue={item.surname} required onChange={e => {
                                                            item.surname = e.target.value
                                                            setDuty({...duty, personnel: duty.personnel})
                                                        }} type="text"/>
                                                    </div>
                                                </div>
                                                <span style={{cursor: "pointer"}} onClick={() => {
                                                    setDuty({
                                                        ...duty,
                                                        personnel: duty.personnel.filter((item, index2) => index2 !== index)
                                                    })
                                                }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                             fill="currentColor"
                                                             className="bi bi-trash" viewBox="0 0 16 16">
                                                            <path
                                                                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                                                            <path
                                                                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                                                        </svg>
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div style={{gridColumn: `span ${3}`}}>
                                    <span className={css.personnelTitle}>Нотатки    </span>
                                    <span className={css.personnelTitle} style={{cursor: "pointer"}} onClick={() => {
                                        setDuty({
                                            ...duty,
                                            notations: [...duty.notations, ""]
                                        })
                                    }}>
                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                  className="bi bi-plus-square" viewBox="0 0 16 16">
                                 <path
                                     d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                 <path
                                     d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                 </svg>
                            </span>
                                    <div className={css.personnelContainer}>
                                        {duty.notations.map((item, index) => (
                                            <>
                                                <textarea className={css.notation} onChange={(e) => {
                                                    duty.notations[index] = e.target.value
                                                    setDuty({...duty, notations: duty.notations})
                                                }} defaultValue={item}/>
                                            </>
                                        ))}
                                    </div>
                                </div>

                                <div className={css.containerInput}>
                                    <span>Тип наряду</span>
                                    <select defaultValue={duty.type} required onChange={e => {
                                        setDuty({...duty, type: e.target.value})
                                    }}>
                                        {Object.values(DutyType).map(item => (
                                            <option value={item}>{item}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className={css.containerInput}>
                                    <span>Підрозділ</span>
                                    <input defaultValue={duty.unit} onChange={e => {
                                        setDuty({...duty, unit: e.target.value})
                                    }}/>
                                </div>

                                <div className={css.containerInput}>
                                    <span>Дата наряду</span>
                                    <input defaultValue={new Date(duty.date).getTime()} type={"date"} onChange={e => {
                                        setDuty({...duty, date: new Date(e.target.value)})
                                    }}/>
                                </div>

                            </div>
                            <div className={css.btnContainer}>
                                <button type={"submit"}>Змінити</button>
                            </div>
                        </form>

                    </LayoutBlock>
                    <button onClick={() => {
                        console.log(duty)
                    }}>asd
                    </button>
                </>
            }
        </>
    );
};

export default DetailedDutyPage;