import { useState } from "react";
import '../components/Form.css';

function Form() {

    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [city, setCity] = useState('');
    const [module, setModule] = useState('');

    return (
        <div>
            <form>
                <label>
                    Nome completo:
                    <input type="text" value={name} onChange={({ target }) => setName(target.value)} />
                </label>
                <label>
                    Idade:
                    <input type="number" value={age} onChange={({ target }) => setAge(target.value)} />
                </label>
                <label>
                    Cidade:
                    <input type="text" value={city} onChange={({ target }) => setCity(target.value)} />
                </label>
                <label>
                    Módulo atual:
                    <input type="checkbox" value="Fundamentos" checked={module === "Fundamentos"} onChange={({target}) => setModule(target.value)} /> Fundamentos
                    <input type="checkbox" value="Front-end" checked={module === "Front-end"} onChange={({target}) => setModule(target.value)} /> Front-end
                    <input type="checkbox" value="Back-end" checked={module === "Back-end"} onChange={({target}) => setModule(target.value)} /> Back-end
                    <input type="checkbox" value="Ciência da computação" checked={module === "Ciência da computação"} onChange={({target}) => setModule(target.value)} /> Ciência da computação
                </label>
            </form>
            <button>Enviar Formulário</button>
        </div>
    );
}

export default Form;
