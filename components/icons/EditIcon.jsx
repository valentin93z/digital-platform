const EditIcon = ({ width, height, className }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
    >
      <path d="M200-200h56l392-391-29-29-28-28-391 392v56Zm-40 80q-17 0-28.5-11.5T120-160v-97q0-16 6-30.5t17-25.5l505-504q11-11 26-17t31-6q16 0 30.5 6t26.5 18l55 56q12 11 17.5 25.5T840-704q0 15-5.5 30T817-647L313-143q-11 11-25.5 17t-30.5 6h-97Zm600-584-56-56 56 56ZM648-591l-29-29-28-28 57 57Z"/>
    </svg>
  )
}

export default EditIcon;