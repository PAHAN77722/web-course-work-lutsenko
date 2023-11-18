import React, {FC, useState} from 'react';
import {Duty} from "../../model/types";
import css from "./DutyCard.module.css"
import {formatDate} from "../../model/formatDate";
import {compareDate} from "../../model/compareDate";
import {RouterNames} from "../../router/RouterNames";
import MyLink from "../MyLink/MyLink";
import $api from "../../http";
import Dialog from "../Dialog/Dialog";

interface DutyCardProps {
    duty: Duty;
}

const DutyCard: FC<DutyCardProps> = ({duty}) => {

    const [showDialog, setShowDialog] = useState(false);
    const handleCancel = () => {
        setShowDialog(false);
    };

    const handleDelete = () => {
        $api.delete(`/duty/${duty.id}`).then(() => {
            setShowDialog(false);
            window.location.reload()
        })
    };

    return (
        <>
            <div className={css.container}>
                <div className={css.topContainer}>
                    <div className={css.fieldContainer}>
                        <span className={css.fieldTitle}>Вид наряду:</span> <span
                        className={css.fieldValue}>{duty.type}</span>
                    </div>
                    <div className={css.fieldContainer}>
                        <span className={css.fieldTitle}>Дата наряду:</span> <span
                        className={css.fieldValue}> {formatDate(duty.date)}</span>
                    </div>

                    <div className={css.fieldContainer}>
                        <span className={css.fieldTitle}>Статус:</span> <span
                        className={css.fieldValue}>{compareDate(duty.date) === -1 ?
                        <span style={{color: "blue"}}>Заплановано</span> : compareDate(duty.date) === 0 ?
                            <span style={{color: "green"}}>Діючий наряд</span> :
                            <span style={{color: "red"}}>Здано</span>}</span>
                    </div>

                    <div className={css.controlContainer}>
                        <MyLink to={`${RouterNames.DUTY}/${duty.id}`}>
                            Редагувати
                        </MyLink>
                        <button onClick={() => setShowDialog(true)} className={css.delBtn}>Видалити</button>
                    </div>

                </div>

                <div className={css.fieldContainer}>
                    <span className={css.fieldTitle}>Підрозділ:</span> <span
                    className={css.fieldValue}> {duty.unit}</span>
                </div>

                <div className={css.personnelContainer2}>
                    <span className={css.fieldTitle}>Особовий склад:</span>
                    <div className={css.personnelContainer}>
                        {duty.personnel.map(item => (
                            <div className={css.servicemanCard}>
                                {item.rank} {item.surname} {item.name}
                            </div>
                        ))}
                    </div>
                </div>
                {(duty.notations.length !== 0 && duty.notations[0] !== '') &&
                    <div className={css.personnelContainer2}>
                        <span className={css.fieldTitle}>Нотатки:</span>
                        <div className={css.personnelContainer}>
                            {duty.notations.map(item => (
                                item!== '' &&
                                <div className={css.servicemanCard}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                }
            </div>
            {showDialog &&
                <Dialog onDelete={handleDelete} onCancel={handleCancel}/>
            }
        </>
    );
};

export default DutyCard;