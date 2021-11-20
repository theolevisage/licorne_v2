 <template>
    <div class="shadow-md w-full md:w-6/10 xl:4/10 m-auto my-6 p-6 rounded bg-gray-100">
		<div class="flex justify-center">
			<span class="uppercase text-3xl font-bold tracking-wide text-gray-700 mb-8">Formulaire de contact</span>
		</div>

		<form action="action_page.php">

			<label class="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2" for="fname">Prénom</label>
			<input class="mb-4" type="text" id="fname" name="firstname" placeholder="Prénom ...">


			<label class="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2" for="lname">Nom</label>
			<input class="mb-4" type="text" id="lname" name="lastname" placeholder="Nom ...">

			<label class="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2" for="country">Pays</label>
			<select class="mb-4 block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" id="country" name="country">
				<option value="australia">Australia</option>
				<option value="canada">Canada</option>
				<option value="usa">USA</option>
			</select>

			<label class="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2" for="subject">Message</label>
			<textarea class="mb-4 p-3 form-textarea mt-1 block" id="subject" name="subject" placeholder="Demandez nous l'impossible ..." style="height:200px"></textarea>

			<input type="submit" value="Envoyer">

		</form>
	</div>
</template>