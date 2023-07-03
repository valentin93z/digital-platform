const ResultsIcon = ({ width, height, className }) => {
    return (
      <svg
        className={className}
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
      >
        <path d="M186.666-120q-27 0-46.833-19.833T120-186.666v-620.001q0-14.166 9.617-23.75Q139.234-840 153.45-840q14.216 0 23.716 9.583 9.5 9.584 9.5 23.75v620.001h620.001q14.166 0 23.75 9.617Q840-167.432 840-153.216q0 14.216-9.583 23.716-9.584 9.5-23.75 9.5H186.666Zm96.439-130Q269-250 259.5-259.584q-9.5-9.583-9.5-23.749v-276q0-14.167 9.542-23.75 9.541-9.583 23.645-9.583h66.375q14.104 0 23.604 9.583t9.5 23.75v276q0 14.166-9.541 23.749Q363.584-250 349.479-250h-66.374Zm198.666 0q-14.104 0-23.604-9.584-9.5-9.583-9.5-23.749v-480q0-14.167 9.541-23.75 9.542-9.584 23.646-9.584h66.374q14.105 0 23.605 9.584 9.5 9.583 9.5 23.75v480q0 14.166-9.541 23.749Q562.25-250 548.146-250h-66.375Zm196 0q-14.104 0-23.604-9.584-9.5-9.583-9.5-23.749v-113.334q0-14.166 9.541-23.749Q663.749-430 677.854-430h66.374q14.105 0 23.605 9.584 9.5 9.583 9.5 23.749v113.334q0 14.166-9.542 23.749Q758.25-250 744.146-250h-66.375Z"/>
      </svg>
    )
}

export default ResultsIcon;