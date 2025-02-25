export const Bounty = () => {
    return (
        <>
            <h2 className='text-2xl'>Bounty</h2>
            <table className='flex flex-col'>
                <th className='grid grid-cols-3 text-center font-bold'>
                    <td>&nbsp;</td>
                    <td>Scouts</td>
                    <td>Harvesters</td>
                </th>
                <tr className='grid grid-cols-3 text-center'>
                    <td className='text-left font-bold'>At Home</td>
                    <td>#</td>
                    <td>#</td>
                </tr>
                <tr className='grid grid-cols-3 text-center'>
                    <td className='text-left font-bold'>In the Field</td>
                    <td>#</td>
                    <td>#</td>
                </tr>
            </table>
        </>
    );
};
