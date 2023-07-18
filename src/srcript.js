const LS_SAVED_ITEMS = "SVEN_SAVED_ITEMS";

class Srcript {
	textareaRef;
	savedListRef;
	btnClearAll;
	savedItems = [];
	formJsonRef;
	formGeneralRef;
	formGeneralContainerRef;
	formData = {
		lastname: "Шведчикова"
	}

	constructor() {
		this.formJsonRef = document.getElementById("form-json-ref");
		this.formGeneralRef = document.getElementById("form-general");
		this.formGeneralContainerRef = document.getElementById("form-general-container");
		this.textareaRef = document.getElementById("textarea");
		this.btnClearAll = document.getElementById("clear-all");
		this.savedListRef = document.getElementById("saved-list");
		const btnSave = document.getElementById("btn-save");
		const btnGenerate = document.getElementById("btn-generate");

		this.setDefaultSavedList();

		btnSave.disabled = !this.textareaRef.value;
		this.textareaRef.oninput = () => {
			btnSave.disabled = !this.textareaRef.value;
		}

		btnSave.onclick = () => {
			this.onSave();
		}

		this.btnClearAll.onclick = () => {
			this.onClear(null);
		}

		btnGenerate.onclick = () => {
			this.onGenerate();
		}
	}

	setDefaultSavedList() {
		const savedListJson = localStorage.getItem(LS_SAVED_ITEMS);
		const savedItems = JSON.parse(savedListJson) || [];

		savedItems.forEach((item, index) => {
			const isLastChild = index === savedItems.length - 1;
			this.renderItem(item, isLastChild);
		})

		if (this.savedItems.length) {
			const firstChild = this.savedItems[0].json;
			if (firstChild) {
				this.updateUserJson(firstChild);
			}
		}
	}

	toggleSavedList(isShow) {
		if (isShow) {
			this.savedListRef.classList.remove("hide");
			this.btnClearAll.disabled = false;
		} else {
			this.savedListRef.classList.add("hide");
			this.btnClearAll.disabled = true;
		}
	}

	updateUserJson(newUserJson) {
		this.textareaRef.value = JSON.stringify(newUserJson);
	}

	onSave() {
		if (this.textareaRef.value) {
			const jsonName = prompt("Введите название");
			if (!this.savedItems || !this.savedItems.find((item) => item.name === jsonName)) {
				this.addSavedItem(jsonName);
			} else {
				alert("Это имя уже есть в списке");
			}
		}
	}

	addSavedItem(jsonName) {
		const newItem = {
			name: jsonName,
			json: JSON.parse(this.textareaRef.value),
		};
		this.renderItem(newItem, true);

		localStorage.setItem(LS_SAVED_ITEMS, JSON.stringify(this.savedItems));
	}

	renderItem(item, isCheckSavedList) {
		this.savedItems.push(item);

		const itemRef = document.createElement('button');
		itemRef.setAttribute('data-item', item.name);
		itemRef.setAttribute('type', 'button');
		itemRef.classList.add('user-content__saved-item');
		itemRef.innerText = item.name;

		const delRef = document.createElement('span');
		delRef.setAttribute('data-del', item.name);
		delRef.classList.add('user-content__saved-item-remove');
		delRef.innerText = 'x';

		itemRef.appendChild(delRef);
		this.savedListRef.appendChild(itemRef);

		itemRef.addEventListener('click', () => {
			this.updateUserJson(item.json);
		})

		delRef.addEventListener('click', (e) => {
			e.stopPropagation();
			this.onClear(item, itemRef);
		})

		if (isCheckSavedList) {
			if (this.savedItems.length) {
				this.toggleSavedList(true);
				this.btnClearAll.disabled = false;
			} else {
				this.toggleSavedList(false);
				this.btnClearAll.disabled = true;
			}
		}
	}

	onGenerate() {
		const json = JSON.parse(this.textareaRef.value);
		const props = {
			schema: json,
			formData: this.formData
		}

		createSchemaForm(this.formJsonRef, props);
		document.addEventListener("onSubmit", ({detail}) => {
			console.log(detail);
			this.formGeneralContainerRef.classList.remove("hide");
			this.formGeneralRef.innerText = JSON.stringify(detail);
		});
		document.addEventListener("onChangeForm", ({detail}) => {
			console.log(detail)
		});
	}

	onClear(item, itemRef) {
		if (item) {
			const index = this.savedItems.indexOf(item.name);
			this.savedItems.splice(index, 1);
			itemRef.remove();
		} else {
			this.savedItems = [];
			this.savedListRef.innerHTML = "";
		}

		if (!this.savedItems.length) {
			this.toggleSavedList(false);
		}

		localStorage.setItem(LS_SAVED_ITEMS, JSON.stringify(this.savedItems));
	}
}


window.onload = () => {
	new Srcript();
}
