// 在 App.js 文件中使用组件
import React from 'react';
import './App.css';
import StudentList from './components/StudentList';
import DormitoryList from './components/DormitoryList';
import AllocationList from './components/AllocationList';
import HygieneList from './components/HygieneList';
import AddStudent from './components/AddStudent';
import AddDormitory from './components/AddDormitory';
import AddAllocation from './components/AddAllocation';
import AddHygiene from './components/AddHygiene';

function App() {
    return (
        <div className="App">
            <StudentList />
            <AddStudent />
            <DormitoryList />
            <AddDormitory />
            <AllocationList />
            <AddAllocation />
            <HygieneList />
            <AddHygiene />
        </div>
    );
}

export default App;
