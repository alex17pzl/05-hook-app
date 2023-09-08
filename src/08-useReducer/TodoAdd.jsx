import PropTypes from 'prop-types';
import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ onNewTodo }) => {
  const { formState, description, onInputChange, onResetForm } = useForm({
    description: '',
  });

  const onSubmit = (event) => {
    // Para que no se haga full refresh del navegador
    event.preventDefault();

    if (description.length <= 1) return;

    const value = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };

    onNewTodo(value);
    onResetForm();
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="¿Qué hay que hacer?"
        className="form-control"
        name="description"
        value={description}
        onChange={onInputChange}
      />
      <button type="submit" className="btn btn-outline-primary mt-2">
        Agregar
      </button>
    </form>
  );
};

TodoAdd.propTypes = {
  onNewTodo: PropTypes.func.isRequired,
};
