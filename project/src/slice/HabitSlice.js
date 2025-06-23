import { createSlice } from "@reduxjs/toolkit"
const habits = [
    {
        id: 1,
        title: "Пить воду утром",
        days: Array.from({ length: 31 }, (_, i) => ({ day: i + 1, status: false })),
    },
    {
        id: 2,
        title: "Делать зарядку",
        days: Array.from({ length: 31 }, (_, i) => ({ day: i + 1, status: false })),
    },
    {
        id: 3,
        title: "Читать книгу",
        days: Array.from({ length: 31 }, (_, i) => ({ day: i + 1, status: false })),
    },
]
const slice = createSlice({
    name: 'HabitSlice',
    initialState: habits,
    reducers: {
        addNewHabits: function (state, param) {
            return [...state, { id: habits.length + 1, title: param.payload, days: Array.from({ length: 31 }, (_, i) => ({ day: i + 1, status: false })) }]
        },
        changeCheckBox: function (state, param) {
            const { id, day} = param.payload;
            console.log('+');
            
            const habit = state.find(item => item.id === id);
            const dayToUpdate = habit.days.find(d => d.day === day);
            dayToUpdate.status = !dayToUpdate.status;
        }
    }
})

export const { addNewHabits, changeCheckBox } = slice.actions // dispatch
export default slice.reducer // store