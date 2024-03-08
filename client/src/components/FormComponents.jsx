// react
import PropTypes from "prop-types";

// form
import { useField } from "formik";

export const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      {label && (
        <label htmlFor={props.name} className="inline-block mb-2 font-medium">
          {label}
        </label>
      )}
      <input
        className="transition-all border border-black focus:border-2 focus:border-secondary  py-4 px-5 rounded-2xl w-full outline-none"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-sm">{meta.error}</div>
      ) : null}
    </div>
  );
};

MyTextInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export const MyCheckbox = ({ children, ...props }) => {
  const [field] = useField({ ...props, type: "checkbox" });
  return (
    <div>
      <label className="flex gap-2 items-center">
        <input type="checkbox" {...field} {...props} className="h-4 w-4" />
        {children}
      </label>
    </div>
  );
};

MyCheckbox.propTypes = {
  children: PropTypes.node.isRequired,
};

export const MyRadio = ({ children, ...props }) => {
  const [field] = useField({ ...props, type: "radio" });
  return (
    <div>
      <label className="flex items-center gap-2">
        <input type="radio" {...field} {...props} className="h-4 w-4" />
        {children}
      </label>
    </div>
  );
};

MyRadio.propTypes = {
  children: PropTypes.node.isRequired,
};

export const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      {label && <label htmlFor={props.name}>{label}</label>}
      <select
        {...field}
        {...props}
        className="transition-all border border-black focus:border-2 focus:border-secondary py-4 px-5 rounded-2xl w-full outline-none"
      />
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-sm">{meta.error}</div>
      ) : null}
    </div>
  );
};

MySelect.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
};

