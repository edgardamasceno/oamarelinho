import { useContext } from 'react';
import { LogoSVG } from '../../components/LogoSVG';
import { Card } from '../../components/Card';
import { Search } from '../../components/Search';
import { SearchStats } from '../../components/SearchStats';
import { SearchContext } from '../../contexts/SearchContext';

import './styles.scss';

export const HomePage = () => {

    const { jobs, time, total, searchHandler } = useContext(SearchContext);

    return (
        <div className='HomePage'>
            <header>
                <span className='Logo'>
                    <LogoSVG />
                </span>
                <Search searchHandler={searchHandler} placeholder='Encontre aqui o emprego que tanto procura!' />
            </header>
            <main>
                <section className='Result'>
                    <SearchStats total={total} time={time} />
                    {
                        jobs.map((job) => {
                            return <Card {...job} key={job.id} />
                        })
                    }
                </section>
            </main>
            <footer>
                <LogoSVG />
            </footer>
        </div>
    );
}