import React from 'react'
import HistoryIn from '../_components/HistoryIn'
import HistoryOut from '../_components/HistoryOut'
import { Button } from '@mui/material'

export default function History() {
    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                <Button variant="contained">รายการรับเข้า</Button>
                <Button variant="outlined">รายการเบิกออก</Button>
            </div>
            <br />
            {1 < 2 ? <HistoryIn /> : <HistoryOut />}
        </div>
    )
}
