function Card() {
    return (
        <>
            <div class="py-16 px-8 bg-gray-50 text-center">
                <div class="flex flex-col md:flex-row justify-center gap-8">

                    
                    <div class="bg-white rounded-lg shadow-lg p-6 w-full md:w-1/3">
                        <div class="mb-4">
                            <img src="https://printify.com/pfh/assets/legacy/higher-profits.svg" alt="Higher Profits" class="w-full rounded-md h-48 object-contain" />
                        </div>
                        <div class="text-gray-700">
                            <p class="font-semibold mb-2">Higher Profits</p>
                            <p class="text-sm text-gray-500">We offer some of the lowest prices in the industry because print providers continuously compete to win your business.</p>
                        </div>
                    </div>

                    
                    <div class="bg-white rounded-lg shadow-lg p-6 w-full md:w-1/3">
                        <div class="mb-4">
                            <img src="https://printify.com/pfh/assets/legacy/robust-scaling.svg" alt="Robust Scaling" class="w-full rounded-md h-48 object-contain" />
                        </div>
                        <div class="text-gray-700">
                            <p class="font-semibold mb-2">Robust Scaling</p>
                            <p class="text-sm text-gray-500">Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.</p>
                        </div>
                    </div>

                   
                    <div class="bg-white rounded-lg shadow-lg p-6 w-full md:w-1/3">
                        <div class="mb-4">
                            <img src="https://printify.com/pfh/assets/legacy/best-selection.svg" alt="Best Selection" class="w-full rounded-md h-48 object-contain" />
                        </div>
                        <div class="text-gray-700">
                            <p class="font-semibold mb-2">Best Selection</p>
                            <p class="text-sm text-gray-500">With 900+ products and top quality brands, you can choose the best products for your business.</p>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}

export default Card;
