import React, {useState} from "react";
import {useCounter} from "../../hooks/counter";
import classNames from "classnames";
import {counterButtonList, setCounterButtonsList} from "../../App";
import {Link} from "react-router-dom";

export const Counter = () => {
    const [activeButtonId, setActiveButtonId] = useState<null | number>()
    const {inc, counter, setCounterValue, dec, resetCounter} = useCounter()


    function SelectActiveButton(item_id: number, item_value: number) {
        inc(item_value)

        setActiveButtonId(item_id)
    }

    return (
        <div className="Counter">
            <h1 data-testid="location-title" className={"Title"}>Counter</h1>
            <Link data-testid="link_to_about" to={"/about"}>To About</Link>

            <h2>Кликов по кнопкам: {counter}</h2>
            <button className={"button"} onClick={() => inc(1)} data-testid={"incCounter by 1"}>Увеличить счетчик на 1
            </button>
            <div className={"ButtonsList"}>
                {counterButtonList.map((item) => {
                    return <button
                        data-testid={`incCounter by ${item.value}`}
                        className={classNames("button", {
                            ["button-active"]: activeButtonId === item.id
                        })}
                        onClick={() => SelectActiveButton(item.id, item.value)}
                        key={item.id}>
                        Увеличить счётчик на {item.value}
                    </button>
                })}
            </div>
            <div className={"ButtonsList"}>
                {setCounterButtonsList.map((item) => {
                    return <button data-testid={`setCounter by ${item.value}`}
                                   className={classNames("button")}
                                   onClick={() => setCounterValue(item.value)}
                                   key={item.id} >
                        Установить счётчик на {item.value}
                    </button>
                })}
            </div>
            <button className={"button"} onClick={resetCounter} data-testid={"reset Counter"}>Сбросить счётчик</button>
        </div>
    )
}