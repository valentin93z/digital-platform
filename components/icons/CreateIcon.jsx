const CreateIcon = ({ width, height, className }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
    >
      <path d="M200-12q-33 0-56.5-23.5T120-92v-560q0-33 23.5-56.5T200-732h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-12H200Zm280-360Zm167-337 57 56-264 264v57h56l265-265 57 56-265 265q-11 11-25.5 17.5T497-252h-97q-17 0-28.5-11.5T360-292v-97q0-16 6-30.5t17-25.5l264-264Zm171 168L647-709l100-100q24-24 57.5-24t56.5 24l56 57q23 23 23 56t-23 56l-99 99Z"/>
    </svg>
  )
}

export default CreateIcon;