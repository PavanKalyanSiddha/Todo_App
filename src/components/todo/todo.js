import React, { useEffect, useState } from "react";
import history from "../history";
import {
  ButtonContainer,
  Container,
  Edit,
  Flexcontainer,
  Input,
} from "./style";

const Todo = () => {
  const [taskList, setTaskList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  // const [edit, setEdit] = useState("");
  const [editValue, setEditValue] = useState("");
  const [openInput, setOpenInput] = useState(false);
  const [editInputIdx, setEditInputIdx] = useState(null);
  const [updatedList, setUpdatedList] = useState([]);
  const [pageNationValue, setPageNationValue] = useState(0);

  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    if (!accessToken) {
      history.push("/login");
      window.location.reload();
    }
  }, [accessToken]);

  const handleUpdateList = (firstIdx, lastIdx) => {
    setPageNationValue(firstIdx);
    setUpdatedList([]);
    const newList = [];
    for (let i = firstIdx; i < lastIdx; i++) {
      newList.push(taskList[i]);
    }
    setUpdatedList(newList);
  };

  useEffect(() => {
    if (taskList.length > 0) {
      handleUpdateList(0, taskList.length > 10 ? 10 : taskList.length);
    }
  }, [taskList, inputValue]);

  console.log("taskList", taskList);
  const addTaskList = () => {
    if (inputValue) {
      let newTaskList = taskList;
      const newTask = {
        taskDate: new Date().getDate() + "/" + new Date().getMonth(),
        task: inputValue,
        createdAt: new Date().getDate(),
      };
      newTaskList.push(newTask);

      setTaskList(newTaskList);
      // handleUpdateList(0, newTaskList.length > 10 ? 10 : newTaskList.length)
      setInputValue("");
    }
  };
  const editTaskValue = (idx) => {
    setEditInputIdx(idx);
    if (openInput) {
      const editTask = {
        taskDate: new Date().getDate() + "/" + new Date().getMonth(),
        task: editValue,
        createdAt: new Date().getDate(),
      };

      taskList[idx] = editTask;
      setOpenInput(false);
    } else {
      setEditValue(taskList[idx].task);
      setOpenInput(true);
    }
  };

  const editHandler = (evt) => {
    setEditValue(evt.target.value);
  };

  const handleDeleteTask = (idx) => {
    taskList.splice(idx, 1);
    setTaskList([...taskList]);
  };

  return (
    <Container>
      <h2> Todo List</h2>
      <Flexcontainer>
        <Input
          placeholder="Enter the task"
          value={inputValue}
          onChange={(evt) => setInputValue(evt.target.value)}
        />
        <ButtonContainer onClick={addTaskList}>Add Task</ButtonContainer>
      </Flexcontainer>
      <Flexcontainer>
        <Edit> <i>Date</i>  </Edit>
        <Edit><i>Title</i>  </Edit>
        <Edit></Edit>
        <Edit></Edit>
      </Flexcontainer>
      {updatedList.length > 0 &&
        updatedList.map((taskItem, idx) => {
          return (
            <Flexcontainer>
              {console.log("date", taskItem?.taskDate)}
              <Edit
                style={{
                  color: taskItem.createdAt < new Date().getDate ? "red" : "",
                }}
              >
                {" "}
                {taskItem?.taskDate}{" "}
              </Edit>
              {openInput === true && idx === editInputIdx ? (
                <Input
                  placeholder="edit task"
                  value={editValue}
                  onChange={editHandler}
                />
              ) : (
                <Edit> {taskItem?.task} </Edit>
              )}
              <ButtonContainer onClick={() => editTaskValue(idx)}>
                {openInput === true && idx === editInputIdx
                  ? "Confirm Task"
                  : "Edit Task"}
              </ButtonContainer>
              <ButtonContainer onClick={() => handleDeleteTask(idx)}>
                Delete Task
              </ButtonContainer>
            </Flexcontainer>
          );
        })}
      {taskList.length > 10 && (
        <Flexcontainer>
          <ButtonContainer
            onClick={() =>
              handleUpdateList(
                pageNationValue - 10 <= 0 ? 0 : pageNationValue - 10,
                pageNationValue
              )
            }
          >
            Previous
          </ButtonContainer>
          <ButtonContainer
            onClick={() =>
              handleUpdateList(
                pageNationValue + 10 > taskList.length
                  ? pageNationValue
                  : pageNationValue + 10,
                taskList.length - (pageNationValue + 20) < 10
                  ? taskList.length
                  : pageNationValue + 20
              )
            }
          >
            Next
          </ButtonContainer>
        </Flexcontainer>
      )}
    </Container>
  );
};

export default Todo;
