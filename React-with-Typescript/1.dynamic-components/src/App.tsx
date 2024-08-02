import Input from "./components/Input";
import Form from "./components/Form";

function App() {
  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
  }

  return (
    <main>
      <Form onSave={handleSave}>
        <Input type="text" label="Name" id="name" />
        <Input type="number" label="age" id="age" />

        <p>
          <button>save</button>
        </p>
      </Form>
    </main>
  );
}

export default App;
