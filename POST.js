import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Alert } from 'react-native';

const PostRequestExample = () => {

	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ postName: 'React updates ' })
	};

	const postExample = async () => {
		try {
			await fetch(
				'https://reqres.in/api/posts', requestOptions)
				.then(response => {
					response.json()
						.then(data => {
							Alert.alert("Post created at : ",
							data.createdAt);
						});
				})
		}
		catch (error) {
			console.error(error);
		}
	}

	return (
		<View style={styles.btn}>
			<Text>
				Click to make a Post request</Text>
		</View>
	)

}

export default PostRequestExample;

const styles = StyleSheet.create({
	btn: {
		marginTop: 60,
		marginLeft: 30,
		marginRight: 30
	}
})
