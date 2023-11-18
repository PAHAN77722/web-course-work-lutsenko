import React, {useEffect, useState} from 'react';
import {Carousel} from "react-bootstrap";
import {Duty} from "../../model/types";
import $api from "../../http";
import LayoutBlock from "../../component/LayoutBlock/LayoutBlock";
import Title from "../../component/Title/Title";
import DutyCard from "../../component/DutyCard/DutyCard";
import {compareDate} from "../../model/compareDate";

const HomePage = () => {

    const [duties, setDuties] = useState<Duty[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const getDuties = () => {
        $api.get<Duty[]>("/duty").then(res => {
            setDuties(res.data.filter(item => compareDate(item.date) === 0))
        }).then(() => {
            setIsLoading(false)
        }).catch(e => {
            console.log(e)
        })
    }

    useEffect(() => {
        getDuties()
    }, []);

    return (
        <div>
            <LayoutBlock>
                {isLoading ? <div>Loading...</div> :
                    <>
                        <Title title={"Вітаю на веб-порталі назначення нарядів військової частини"}/>
                    </>
                }

            </LayoutBlock>
            <LayoutBlock>
                <Title title={"Наряди на сьогодні"}/>
                <Carousel>
                    {duties.map(item => (
                        <Carousel.Item>
                            <DutyCard duty={item}/>
                        </Carousel.Item>
                    ))}

                </Carousel>
            </LayoutBlock>
            <LayoutBlock>
                <h1>Ласкаво просимо на веб-портал</h1>

                <p>Інноваційний і надійний інструмент для оптимізації процесу призначення та керування нарядами в Збройних Силах України.</p>

                <h2>Що ми пропонуємо:</h2>
                <ul>
                    <li>Ефективне Призначення: Використовуйте наш портал для швидкого та точного призначення нарядів в реальному часі.</li>
                    <li>Безпека та Контроль: Забезпечте максимальний рівень безпеки та контролю над назначеннями.</li>
                    <li>Гнучкі Налаштування: Портал дозволяє гнучко налаштовувати параметри та графіки назначення нарядів.</li>
                </ul>

                <h2>Чому ми:</h2>
                <ul>
                    <li>Інтуїтивний Інтерфейс: Наш простий та зрозумілий інтерфейс робить використання порталу легким та приємним для будь-якого користувача.</li>
                    <li>Стабільність та Надійність: Ми гарантуємо стабільну та надійну роботу системи.</li>
                    <li>Доступність Онлайн: Використовуйте портал з будь-якого пристрою та з будь-якої точки світу.</li>
                </ul>

                <p>Приєднуйтеся до нас сьогодні та зробіть процес призначення нарядів простішим та ефективнішим для вашого командування!</p>

            </LayoutBlock>
        </div>
    );
};

export default HomePage;