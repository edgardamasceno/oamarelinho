import { createContext, useEffect } from 'react'
import { useCallback, useState } from 'react'

interface Props {
    children: React.ReactNode
}

type Job = {
    id: number;
    title: string;
    description: string;
    companyName: string;
    cityName: string;
    stateName: string;
    createdAt: string;
    updatedAt: string;
    score?: number;
}

type SearchContextType = {
    jobs: Job[];
    time: number;
    total: number;
    searchHandler: (term: string) => void
}

export const SearchContext = createContext({} as SearchContextType)

export const SearchProvider = (props: Props) => {

    const API_URL = 'http://localhost:3000/api/v1';

    const { children } = props;

    const [jobs, setJobs] = useState<Job[]>([]);
    const [time, setTime] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        searchHandler('');
    }, []);

    const searchHandler = useCallback((term: string) => {
        const startTime = new Date().getTime();
        fetch(term ? `${API_URL}/jobs/search?term=${term}` : `${API_URL}/jobs`)
            .then(response => response.json())
            .then(data => {
                setJobs(data);
                setTime((new Date().getTime() - startTime) / 1000);
                setTotal(data.length);
            })
    }, []);

    const value = {
        jobs,
        time,
        total,
        searchHandler
    }

    return (
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider>
    )
}