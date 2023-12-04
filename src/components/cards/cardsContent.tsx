export const CardsContent = (props) => {


    let options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    }

    // @ts-ignore
    let date = new Date().toLocaleDateString('ru', options)
    return (
        <div>
            <div className={"w-96 bg-[#A4B69E] rounded-lg p-5 flex flex-col text-center gap-5 mb-5 mt-10"}>
                <div className={"text-[10px] text-right"}>{date}</div>
                <div className={"gap-5 flex"}>
                    <strong>{props.number + "."}</strong>
                    <div>{props.post.title}</div>
                </div>
                <button
                    className={"bg-[#8ba69a] rounded-lg hover:bg-[#968ba6] font-[600]"}
                    onClick={() => props.remove(props.post)}>Удалить
                </button>

            </div>
        </div>
    )


}