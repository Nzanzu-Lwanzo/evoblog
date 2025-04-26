
import FilterBulb from './FilterBulb'
import { ArrowDownAZ } from 'lucide-react'

const FilterByDate = () => {
    return (
        <FilterBulb label='Par date' icon={<ArrowDownAZ size={15} stroke='currentColor' />} />

    )
}

export default FilterByDate