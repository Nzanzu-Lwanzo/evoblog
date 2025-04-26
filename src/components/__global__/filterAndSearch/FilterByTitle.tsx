
import FilterBulb from './FilterBulb'
import { ArrowDownAZ } from 'lucide-react'

const FilterByTitle = () => {
  return (
    <FilterBulb label='Par titre' icon={<ArrowDownAZ size={15} stroke='currentColor' />} />

  )
}

export default FilterByTitle