import './styles.scss';

interface Props {
    total: number,
    time: number
}

export const SearchStats = (props: Props) => {
    const { total, time } = props;
    return (
        <span className='SearchStats'>{total} resultados encontrados em {time} segundos</span>
    )
}