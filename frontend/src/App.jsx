import TaskInput from "./components/Task/TaskInput";
import TaskList from "./components/Task/TaskList";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <Layout>
        <TaskInput />
        <TaskList />
      </Layout>
    </>
  );
}

export default App;
