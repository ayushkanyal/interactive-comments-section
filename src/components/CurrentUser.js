import style from "./CurrentUser.module.css";

export default function CurrentUser(){
    return(
        <>
            <div className={style["comment_box"]}>
                <textarea placeholder="Add a comment..."></textarea>
                <div className={style["comment_footer"]}>
                    <img src="https://picsum.photos/200/300" alt="Current User">

                    </img>
                    <button>Send</button>
                </div>
            </div>
        </>
    )
}