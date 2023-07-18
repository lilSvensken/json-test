// const json = {
// 	"title": "ФОС для Лизы",
// 	"type": "object",
// 	"properties": {
// 		"lastname": { "title": "Фамилия", "type": "string" },
// 		"firstname": { "title": "Имя", "type": "string" },
// 		"patronymic": { "title": "Отчество", "type": "string" },
// 		"phone": { "title": "Логин личного кабинет", "type": "string" },
// 		"email": { "title": "Адрес электронной почты", "type": "string", "format": "email" },
// 		"comment": { "title": "Текст обращения", "type": "string" },
// 		"files": { "title": "Скриншот", "$ref": "#\/definitions\/files" },
// 		"service": {
// 			"title": "Вид сервиса",
// 			"type": "string",
// 			"enum": ["Услуги ЖКХ", "Запись к врачу", "Услуги ГИБДД", "Детские сады", "Услуги связи", "Налоги", "Школа и кружки", "Социальная ипотека", "Услуги МФЦ (проверка статуса заявления)", "Виртуальная карта Госуслуг", "Другая услуга"],
// 			"uip_enum": [{ "code": 400309, "value": "Услуги ЖКХ" }, {
// 				"code": 400310,
// 				"value": "Запись к врачу"
// 			}, { "code": 400311, "value": "Услуги ГИБДД" }, { "code": 400312, "value": "Детские сады" }, {
// 				"code": 400313,
// 				"value": "Услуги связи"
// 			}, { "code": 400314, "value": "Налоги" }, { "code": 400315, "value": "Школа и кружки" }, {
// 				"code": 400316,
// 				"value": "Социальная ипотека"
// 			}, { "code": 400318, "value": "Услуги МФЦ (проверка статуса заявления)" }, {
// 				"code": 400319,
// 				"value": "Виртуальная карта Госуслуг"
// 			}, { "code": 400321, "value": "Другая услуга" }]
// 		},
// 		"services_jkh": {
// 			"title": "Сервисы услуг ЖКХ",
// 			"type": "string",
// 			"enum": ["Оплата услуг ЖКХ", "Подача показаний счетчиков ЖКХ", "Формирование счет-фактуры ЖКХ", "Другие ошибки в ЖКХ", "Оплата услуг газоснабжения, технического обслуживания и ремонтных работ", "Подача показаний счетчиков газоснабжения", "Оплата за тепло", "Оплата услуг вневедомственной охраны", "Оплата услуг технического обслуживания сигнализации", "Оплата услуг по обслуживанию системы домофон ООО «Виктория»"],
// 			"uip_enum": [{ "code": 400322, "value": "Оплата услуг ЖКХ" }, {
// 				"code": 400323,
// 				"value": "Подача показаний счетчиков ЖКХ"
// 			}, { "code": 400324, "value": "Формирование счет-фактуры ЖКХ" }, {
// 				"code": 400325,
// 				"value": "Другие ошибки в ЖКХ"
// 			}, {
// 				"code": 400326,
// 				"value": "Оплата услуг газоснабжения, технического обслуживания и ремонтных работ"
// 			}, { "code": 400327, "value": "Подача показаний счетчиков газоснабжения" }, {
// 				"code": 400328,
// 				"value": "Оплата за тепло"
// 			}, { "code": 400329, "value": "Оплата услуг вневедомственной охраны" }, {
// 				"code": 400330,
// 				"value": "Оплата услуг технического обслуживания сигнализации"
// 			}, { "code": 400331, "value": "Оплата услуг по обслуживанию системы домофон ООО «Виктория»" }],
// 			"depends": { "fields": [{ "type": "select", "field": "service", "value": ["Услуги ЖКХ"] }] }
// 		},
// 		"customfield_14231": {
// 			"title": "Фамилия собственника",
// 			"type": "string",
// 			"depends": {
// 				"fields": [{
// 					"type": "select",
// 					"field": "services_jkh",
// 					"value": ["Оплата услуг ЖКХ", "Подача показаний счетчиков ЖКХ", "Формирование счет-фактуры ЖКХ"]
// 				}]
// 			}
// 		},
// 		"customfield_14213": {
// 			"title": "Лицевой счет",
// 			"type": "string",
// 			"depends": {
// 				"fields": [{
// 					"type": "select",
// 					"field": "services_jkh",
// 					"value": ["Оплата услуг ЖКХ", "Подача показаний счетчиков ЖКХ", "Формирование счет-фактуры ЖКХ", "Другие ошибки в ЖКХ", "Оплата услуг газоснабжения, технического обслуживания и ремонтных работ", "Оплата услуг вневедомственной охраны", "Подача показаний счетчиков газоснабжения"]
// 				}]
// 			}
// 		},
// 		"customfield_14229": {
// 			"title": "Фамилия",
// 			"type": "string",
// 			"depends": {
// 				"fields": [{
// 					"type": "select",
// 					"field": "services_jkh",
// 					"value": ["Оплата услуг вневедомственной охраны"]
// 				}]
// 			}
// 		},
// 		"customfield_14274": {
// 			"title": "Номер штрих-кода",
// 			"type": "string",
// 			"depends": {
// 				"fields": [{
// 					"type": "select",
// 					"field": "services_jkh",
// 					"value": ["Оплата услуг по обслуживанию системы домофон ООО «Виктория»"]
// 				}]
// 			}
// 		},
// 		"customfield_14270": {
// 			"title": "Номер квартиры",
// 			"type": "string",
// 			"depends": {
// 				"fields": [{
// 					"type": "select",
// 					"field": "services_jkh",
// 					"value": ["Оплата услуг ЖКХ", "Подача показаний счетчиков ЖКХ", "Формирование счет-фактуры ЖКХ", "Другие ошибки в ЖКХ"]
// 				}]
// 			}
// 		},
// 		"customfield_14205_jkh": {
// 			"title": "Дата оплаты",
// 			"type": "string",
// 			"format": "date",
// 			"depends": {
// 				"fields": [{
// 					"type": "select",
// 					"field": "services_jkh",
// 					"value": ["Оплата услуг ЖКХ", "Формирование счет-фактуры ЖКХ", "Оплата услуг газоснабжения, технического обслуживания и ремонтных работ", "Оплата за тепло", "Оплата услуг вневедомственной охраны", "Оплата услуг технического обслуживания сигнализации", "Оплата услуг по обслуживанию системы домофон ООО «Виктория»"]
// 				}]
// 			}
// 		},
// 		"customfield_14227_jkh": {
// 			"title": "Сумма оплаты",
// 			"type": "string",
// 			"depends": {
// 				"fields": [{
// 					"type": "select",
// 					"field": "services_jkh",
// 					"value": ["Оплата услуг ЖКХ", "Формирование счет-фактуры ЖКХ", "Оплата услуг газоснабжения, технического обслуживания и ремонтных работ", "Оплата за тепло", "Оплата услуг вневедомственной охраны", "Оплата услуг технического обслуживания сигнализации", "Оплата услуг по обслуживанию системы домофон ООО «Виктория»"]
// 				}, { "type": "select", "field": "gibdd_type", "value": ["Оплата штрафов административной комиссии"] }]
// 			}
// 		},
// 		"customfield_14236_jkh": {
// 			"title": "ФИО плательщика",
// 			"type": "string",
// 			"depends": {
// 				"fields": [{
// 					"type": "select",
// 					"field": "services_jkh",
// 					"value": ["Оплата услуг ЖКХ", "Формирование счет-фактуры ЖКХ", "Оплата услуг газоснабжения, технического обслуживания и ремонтных работ", "Оплата за тепло", "Оплата услуг вневедомственной охраны", "Оплата услуг технического обслуживания сигнализации", "Оплата услуг по обслуживанию системы домофон ООО «Виктория»"]
// 				}, { "type": "select", "field": "gibdd_type", "value": ["Оплата штрафов административной комиссии"] }]
// 			}
// 		},
// 		"customfield_14275_jkh": {
// 			"title": "Последние 4 цифры номера карты оплаты",
// 			"type": "string",
// 			"depends": {
// 				"fields": [{
// 					"type": "select",
// 					"field": "services_jkh",
// 					"value": ["Оплата услуг ЖКХ", "Формирование счет-фактуры ЖКХ", "Оплата услуг газоснабжения, технического обслуживания и ремонтных работ", "Оплата за тепло", "Оплата услуг вневедомственной охраны", "Оплата услуг технического обслуживания сигнализации", "Оплата услуг по обслуживанию системы домофон ООО «Виктория»"]
// 				}, { "type": "select", "field": "gibdd_type", "value": ["Оплата штрафов административной комиссии"] }]
// 			}
// 		},
// 		"customfield_14220_jkh": {
// 			"title": "Номер квитанции",
// 			"type": "string",
// 			"depends": {
// 				"fields": [{
// 					"type": "select",
// 					"field": "services_jkh",
// 					"value": ["Оплата услуг ЖКХ", "Формирование счет-фактуры ЖКХ", "Оплата услуг газоснабжения, технического обслуживания и ремонтных работ", "Оплата за тепло", "Оплата услуг вневедомственной охраны", "Оплата услуг технического обслуживания сигнализации", "Оплата услуг по обслуживанию системы домофон ООО «Виктория»"]
// 				}]
// 			}
// 		},
// 		"customfield_001_select": {
// 			"title": "Справочник без кодов",
// 			"type": "string",
// 			"enum": ["тест", "тест1"],
// 			"uip_enum": [{ "code": 400344, "value": "тест" }, { "code": 400345, "value": "тест1" }]
// 		},
// 		"customfield_002_select_kod": {
// 			"title": "Справочник с кодами",
// 			"type": "string",
// 			"enum": ["тест", "тест2"],
// 			"uip_enum": [{ "code": "test", "value": "тест" }, { "code": "test2", "value": "тест2" }]
// 		},
// 		"customfield_003_file": { "title": "Передача файла", "$ref": "#\/definitions\/files" },
// 		"customfield_004_check_box": {
// 			"title": "Тестовый чек бокс",
// 			"type": "string",
// 			"enum": ["Да", "Нет"],
// 			"uip_enum": [{ "code": "yes", "value": "Да" }, { "code": "no", "value": "Нет" }]
// 		},
// 		"customfield_004_address": { "title": "Поле адрес", "type": "string" },
// 		"customfield_005_date": { "title": "Дата", "type": "string", "format": "date" },
// 		"have_problem": {
// 			"title": "Есть ли проблемы",
// 			"type": "string",
// 			"enum": ["Да", "Нет"],
// 			"uip_enum": [{ "code": "yes", "value": "Да" }, { "code": "no", "value": "Нет" }]
// 		},
// 		"problmes": {
// 			"title": "Наиболее частые проблемы",
// 			"type": "array",
// 			"items": {
// 				"properties": {
// 					"prob_name": { "title": "Описание", "type": "string" },
// 					"prob_file": { "title": "Скрин проблемы", "$ref": "#\/definitions\/files" }
// 				}, "required": ["prob_name"], "type": "object"
// 			},
// 			"minItems": 0,
// 			"depends": { "fields": [{ "type": "checkbox", "field": "have_problem", "value": [15555] }] }
// 		},
// 		"computer": {
// 			"title": "Укажите тип вашего компюьтера",
// 			"type": "object",
// 			"properties": {
// 				"marka": { "title": "Марка", "type": "string" },
// 				"comp_date": { "title": "Дата выпуска", "type": "string", "format": "date" },
// 				"comp_browser": {
// 					"title": "Браузер",
// 					"type": "string",
// 					"enum": ["chrome", "ie"],
// 					"uip_enum": [{ "code": "chrome", "value": "chrome" }, { "code": "ie", "value": "ie" }]
// 				},
// 				"comp_why": {
// 					"title": "За что вы так с нами?",
// 					"type": "string",
// 					"depends": { "fields": [{ "type": "select", "field": "comp_browser", "value": ["ie"] }] }
// 				}
// 			},
// 			"required": []
// 		}
// 	},
// 	"required": ["lastname", "firstname", "phone", "email", "comment", "service", "services_jkh", "customfield_14231", "customfield_14213", "customfield_14229", "customfield_14274"],
// 	"definitions": {
// 		"file": {
// 			"title": "Файл",
// 			"type": "object",
// 			"properties": {
// 				"name": { "title": "Название", "type": "string" },
// 				"size": { "title": "Размер", "type": "integer" },
// 				"mime": { "title": "MimeType", "type": "string" },
// 				"content": { "title": "Содержимое в base64", "type": "string" },
// 				"hash": { "title": "md5 hash", "type": "string" },
// 				"type": { "title": "Тип", "type": "string" }
// 			},
// 			"required": ["name", "size", "mime", "content", "hash"]
// 		}, "files": { "type": "array", "uip_type": "file", "items": { "$ref": "#\/definitions\/file" } }
// 	}
// };

const formData = {
	lastname: "Шведчикова"
}

const props = {
	schema: json,
	formData: formData
}

const App = document.getElementById("test");

window.createSchemaForm(App, props);

// ******** //
const form = document.querySelector('.form');


form.onsubmit = () => {
	const formData = new FormData(form);
	const formValue = Object.fromEntries(formData);
	console.log(formValue)
}
