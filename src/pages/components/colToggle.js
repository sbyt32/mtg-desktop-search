async function colToggle() {
	let colStatus = await document.querySelector("#col").isOpen()

	if (colStatus === false) {
		console.log(colStatus)
		document.querySelector("#col").show();
		colStatus = true
		console.log(colStatus)
		return colStatus
		// this should open it up

	} else {
		console.log(colStatus)
		document.querySelector("#col").close();
		colStatus = false
		console.log(colStatus)
		return colStatus
		// this should close it			
	}
}

export default colToggle;