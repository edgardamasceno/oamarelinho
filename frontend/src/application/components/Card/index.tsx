import './styles.scss';

interface Props {
    id: number,
    title: string,
    description: string,
    companyName: string,
    cityName: string,
    stateName: string,
    createdAt: string,
    updatedAt: string,
}

export const Card = (props: Props) => {

    const {
        id,
        title,
        description,
        companyName,
        cityName,
        stateName,
    } = props;

    const toPtBrDateFOrmat = (dateString: string) => {
        const date = new Date(Date.parse(dateString.substring(0, 10).replace(/-/g, '/')))
        return date.toLocaleDateString('pt-BR');
    }

    const createdAt = toPtBrDateFOrmat(props.createdAt);
    const updatedAt = toPtBrDateFOrmat(props.updatedAt);

    return (
        <article className='Card' id={id.toString()}>
            <header>
                <div className='Title'>
                    <h1>{title}</h1>
                    <h2>{companyName}</h2>
                </div>
                <div className='Time'>
                    <p>Anúncio publicado em:<time dateTime={createdAt}>{createdAt}</time></p>
                    <p>Anúncio atualizado em:<time dateTime={updatedAt}>{updatedAt}</time></p>
                </div>
            </header>
            <main>
                <header>
                    <h1>Mais informações sobre a vaga de emprego:</h1>
                </header>
                <main>
                    <p>{description}</p>
                </main>
            </main>
            <footer>
                <span>{cityName}, {stateName}</span>
                <button>Ver vaga</button>
            </footer>
        </article>
    );
};