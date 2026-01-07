<script lang="ts">
</script>

<div class="min-h-screen bg-slate-100 p-8">
	<h1 class="text-2xl font-bold text-center mb-8">Footer Background Options</h1>

	<!-- Option 1: Dark -->
	<section class="mb-12">
		<h2 class="text-lg font-semibold mb-4 text-slate-700">Option 1: Dark (#1a1a2e)</h2>
		<div class="rounded-2xl overflow-hidden shadow-xl">
			<!-- Simulated page ending -->
			<div
				class="h-24"
				style="background: linear-gradient(180deg, #faf5ff 0%, #fdf2f8 50%, #fff7ed 100%);"
			>
				<p class="text-center text-slate-500 pt-8 text-sm">↑ Page content above</p>
			</div>
			<!-- Footer -->
			<footer class="px-8 py-12" style="background-color: #1a1a2e;">
				<div class="max-w-4xl mx-auto">
					<div class="flex justify-between items-start mb-8">
						<div>
							<h3 class="text-white text-xl font-bold mb-2">Clairvora</h3>
							<p class="text-slate-400 text-sm">Connect with trusted psychic advisors</p>
						</div>
						<div class="flex gap-8">
							<div>
								<h4 class="text-white font-semibold mb-2 text-sm">Company</h4>
								<ul class="space-y-1 text-slate-400 text-sm">
									<li><a href="#" class="hover:text-white transition-colors">About</a></li>
									<li><a href="#" class="hover:text-white transition-colors">Contact</a></li>
								</ul>
							</div>
							<div>
								<h4 class="text-white font-semibold mb-2 text-sm">Legal</h4>
								<ul class="space-y-1 text-slate-400 text-sm">
									<li><a href="#" class="hover:text-white transition-colors">Privacy</a></li>
									<li><a href="#" class="hover:text-white transition-colors">Terms</a></li>
								</ul>
							</div>
						</div>
					</div>
					<div class="border-t border-slate-700 pt-6 flex justify-between items-center">
						<p class="text-slate-500 text-sm">© 2025 Clairvora. All rights reserved.</p>
						<!-- Gradient accent example -->
						<a
							href="#"
							class="text-sm font-medium bg-clip-text text-transparent"
							style="background-image: linear-gradient(135deg, #7638FA, #D300C5, #FF0069);"
						>
							Become an Advisor →
						</a>
					</div>
				</div>
			</footer>
		</div>
	</section>

	<!-- Option 2: Warm Neutral -->
	<section class="mb-12">
		<h2 class="text-lg font-semibold mb-4 text-slate-700">Option 2: Warm Neutral (#FFF9F0)</h2>
		<div class="rounded-2xl overflow-hidden shadow-xl">
			<!-- Simulated page ending -->
			<div
				class="h-24"
				style="background: linear-gradient(180deg, #faf5ff 0%, #fdf2f8 50%, #fff7ed 100%);"
			>
				<p class="text-center text-slate-500 pt-8 text-sm">↑ Page content above</p>
			</div>
			<!-- Footer -->
			<footer class="px-8 py-12" style="background-color: #FFF9F0;">
				<div class="max-w-4xl mx-auto">
					<div class="flex justify-between items-start mb-8">
						<div>
							<h3 class="text-xl font-bold mb-2" style="color: #1a1a2e;">Clairvora</h3>
							<p class="text-sm" style="color: #64748b;">Connect with trusted psychic advisors</p>
						</div>
						<div class="flex gap-8">
							<div>
								<h4 class="font-semibold mb-2 text-sm" style="color: #1a1a2e;">Company</h4>
								<ul class="space-y-1 text-sm" style="color: #64748b;">
									<li><a href="#" class="hover:text-purple-600 transition-colors">About</a></li>
									<li><a href="#" class="hover:text-purple-600 transition-colors">Contact</a></li>
								</ul>
							</div>
							<div>
								<h4 class="font-semibold mb-2 text-sm" style="color: #1a1a2e;">Legal</h4>
								<ul class="space-y-1 text-sm" style="color: #64748b;">
									<li><a href="#" class="hover:text-purple-600 transition-colors">Privacy</a></li>
									<li><a href="#" class="hover:text-purple-600 transition-colors">Terms</a></li>
								</ul>
							</div>
						</div>
					</div>
					<div class="border-t pt-6 flex justify-between items-center" style="border-color: #e8dfd4;">
						<p class="text-sm" style="color: #64748b;">© 2025 Clairvora. All rights reserved.</p>
						<!-- Gradient accent example -->
						<a
							href="#"
							class="text-sm font-medium bg-clip-text text-transparent"
							style="background-image: linear-gradient(135deg, #7638FA, #D300C5, #FF0069);"
						>
							Become an Advisor →
						</a>
					</div>
				</div>
			</footer>
		</div>
	</section>

	<!-- Color swatches for reference -->
	<section>
		<h2 class="text-lg font-semibold mb-4 text-slate-700">Color Reference</h2>
		<div class="flex gap-4">
			<div class="text-center">
				<div class="w-20 h-20 rounded-xl shadow-md" style="background-color: #1a1a2e;"></div>
				<p class="text-xs mt-2 text-slate-600">#1a1a2e</p>
				<p class="text-xs text-slate-400">Dark</p>
			</div>
			<div class="text-center">
				<div class="w-20 h-20 rounded-xl shadow-md border" style="background-color: #FFF9F0;"></div>
				<p class="text-xs mt-2 text-slate-600">#FFF9F0</p>
				<p class="text-xs text-slate-400">Warm Neutral</p>
			</div>
			<div class="text-center">
				<div class="w-20 h-20 rounded-xl shadow-md border" style="background-color: #fff7ed;"></div>
				<p class="text-xs mt-2 text-slate-600">#fff7ed</p>
				<p class="text-xs text-slate-400">Soft gradient end</p>
			</div>
		</div>
	</section>
</div>
