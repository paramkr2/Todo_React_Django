import axios from 'axios'

class TodoDataService{
	
	getAll(token){
		
		axios.defaults.headers.common["Authorization"] = "Token " + token;
		return axios.get("https://rohitsharma002.pythonanywhere.com/api/todos/");
	}
	createTodo(data,token){
		axios.defaults.headers.common["Authorization"] = "Token " + token ;
		return axios.post("https://rohitsharma002.pythonanywhere.com/api/todos/",data);
	}
	
	updateTodo(id,data,token){
		axios.defaults.headers.common["Authorization"] = "Token " + token ;
		console.log('In updateTodo id:',id)
		return axios.put('https://rohitsharma002.pythonanywhere.com/api/todos/'+id,data);
	}
	
	completeTodo(id,token){
		console.log('In delete todo :', id, token );
		axios.defaults.headers.common["Authorization"] = "Token " + token ;
		return axios.put(`https://rohitsharma002.pythonanywhere.com/api/todos/${id}/complete`);
	}
	
	deleteTodo(id,token){
		
		axios.defaults.headers.common['Authorization'] = "Token " + token ;
		return axios.delete("https://rohitsharma002.pythonanywhere.com/api/todos/"+id);
	}
	login(data){
		return axios.post('https://rohitsharma002.pythonanywhere.com/api/login/',data);
	}
	signup(data){
		return axios.post('https://rohitsharma002.pythonanywhere.com/api/signup/',data);
	}
}

export default new TodoDataService() ;
