export default {
	runQuery() {
		Api1_edited_2.run()
	},
	formatData() {
		return Api1_edited_2.data.find(interview => interview === "1");
	}
}