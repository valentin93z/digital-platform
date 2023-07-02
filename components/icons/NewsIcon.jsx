const NewsIcon = ({ width, height, currentPage, page }) => {
    return (
      <svg
        className={`transition-colors ${currentPage === {page} ? 'fill-white dark:fill-white' : 'fill-neutral-700 dark:fill-white'} ${currentPage !== {page} && 'hover:fill-violet-500 dark:hover:fill-violet-500'}`}
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
      >
        <path d="M186.666-120q-27 0-46.833-19.833T120-186.666v-586.668q0-27 19.833-46.833T186.666-840h454.667L840-641.333v454.667q0 27-19.833 46.833T773.334-120H186.666Zm0-66.666h586.668v-419.048H606v-167.62H186.666v586.668Zm92.667-100.668h401.334V-354H279.333v66.666Zm0-318.666H480v-66.666H279.333V-606Zm0 159.333h401.334v-66.666H279.333v66.666Zm-92.667-326.667v167.62-167.62 586.668-586.668Z"/>
      </svg>
    )
}

export default NewsIcon;