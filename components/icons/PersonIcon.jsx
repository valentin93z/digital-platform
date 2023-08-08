const PersonIcon = ({ width, height, className }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
    >
      <path d="M480-496q-79.5 0-134.25-54.75T291-685q0-79.5 54.75-133.75T480-873q79.5 0 134.25 54.25T669-685q0 79.5-54.75 134.25T480-496ZM256-122q-50.938 0-85.969-35.031Q135-192.062 135-243v-21.03q0-41.97 21.75-77.22t59.272-53.761Q280-426 346.25-442.25 412.5-458.5 480-458.5q69.5 0 135.75 15.75t128.228 46.739Q781.5-377.5 803.25-342.75T825-264.03V-243q0 50.938-35.031 85.969Q754.938-122 704-122H256Z"/>
    </svg>
  )
}

export default PersonIcon;