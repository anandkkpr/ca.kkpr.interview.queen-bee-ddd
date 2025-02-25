import {population} from "../../_assets/data/db.ts";

export const Population = () => {
    return (
        <>
            <h2 className='text-2xl mb-2'>Population</h2>
            <hr className='mt-2 mb-4'/>
            <table className='flex flex-col'>
                <th className='grid grid-cols-3 text-center text-sm font-bold'>
                    <td>&nbsp;</td>
                    <td>Scouts</td>
                    <td>Harvesters</td>
                </th>
                <tr className='grid grid-cols-3 text-center'>
                    <td className='text-left font-bold'>Census Total</td>
                    <td>{population.filter(d => d.role == 'scout').length}</td>
                    <td>{population.filter(d => d.role == 'harvester').length}</td>
                </tr>
                <tr className='grid grid-cols-3 text-center'>
                    <td className='text-left font-bold'>At Home</td>
                    <td>{population.filter(d => {
                        return d.isHome && d.role == 'scout'
                    }).length}</td>
                    <td>{population.filter(d => {
                        return d.isHome && d.role == 'harvester'
                    }).length}</td>
                </tr>
                <tr className='grid grid-cols-3 text-center'>
                    <td className='text-left font-bold'>In Field</td>
                    <td>{population.filter(d => {
                        return !d.isHome && d.role == 'scout'
                    }).length}</td>
                    <td>{population.filter(d => {
                        return !d.isHome && d.role == 'harvester'
                    }).length}</td>
                </tr>
            </table>
        </>
    );
};
