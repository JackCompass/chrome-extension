<script lang="ts">
	import { onMount } from 'svelte';

	const BASE_URL = 'https://d2aa6qvp8uav7z.cloudfront.net/';
	let isLoading = true;
	const signature = '806d87f4-5728-4771-a5f8-f491007d6dce';
	const formId = '53d7702c-742a-4d0c-85c1-3bb9167d9b52';
	onMount(async () => {
		try {
			const response = await fetch(
				`${BASE_URL}/api/account/intake/assignment/load/completed?patient_intake_form_id=${encodeURIComponent(
					signature ?? ''
				)}`,
				{
					method: 'GET'
				}
			);
			if (response?.ok) {
				const data = await response.json();
				console.log('data', data);
			}
		} catch (error) {
			console.error(error);
		}
		isLoading = false;
	});

	const handleOnClick = () => {
		chrome.tabs.create({ url: 'https://www.google.com' });
	};
</script>

{#if isLoading}
	<h1 class="text-3xl font-bold underline text-center">Loading Component</h1>
{:else}
	<button class="text-3xl font-bold underline text-center" on:click={handleOnClick}
		>Click to create tab</button
	>
{/if}
