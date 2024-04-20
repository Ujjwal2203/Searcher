import React from 'react'
import { FaSearch } from "react-icons/fa";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
export default function Integrations() {
  return (
    <div>
      <div className='headings'>
          <h1>Integrations</h1>
          <p>Connect apps you want to search across</p>
      </div>
      <div className='search-box'>
        <div className="relative">
          <input type='search' placeholder='Search for integrations' className='w-full p-4 rounded-full bg-gray-8'/>
          <button className='absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-gray-9 rounded-full'> 
            <FaSearch className='text-gray-1'/>
          </button>
        </div>
      </div>
    <div className='grid grid-cols-4 gap-20 place-content-evenly '>
      <div className='cards flex-row space-x-6 mt-8'>
          <Card className="w-80 h-30 flex-row place-content-around bg-gray-8">
          <CardBody>
            <img src='Frontend/src/assests/gmail.webp'></img>
            <Typography variant="h5" color="blue-gray" className="mb-2 text-white text-sm">
              Gmail
            </Typography>
          </CardBody>
          <CardFooter className="text-sm">
            <Button>Connect</Button>
          </CardFooter>
        </Card>
      </div>

      <div className='cards flex-row space-x-6 mt-8'>
          <Card className="w-80 h-30 flex-row place-content-around bg-gray-8">
          <CardBody>
            <img src='Frontend/src/assests/gmail.webp'></img>
            <Typography variant="h5" color="blue-gray" className="mb-2 text-white text-sm">
              Gmail
            </Typography>
          </CardBody>
          <CardFooter className="text-sm">
            <Button>Connect</Button>
          </CardFooter>
        </Card>
      </div>

      <div className='cards flex-row space-x-6 mt-8'>
          <Card className="w-80 h-30 flex-row place-content-around bg-gray-8">
          <CardBody>
            <img src='Frontend/src/assests/gmail.webp'></img>
            <Typography variant="h5" color="blue-gray" className="mb-2 text-white text-sm">
              Gmail
            </Typography>
          </CardBody>
          <CardFooter className="text-sm">
            <Button>Connect</Button>
          </CardFooter>
        </Card>
      </div>

      <div className='cards flex-row space-x-6 mt-8'>
          <Card className="w-80 h-30 flex-row place-content-around bg-gray-8">
          <CardBody>
            <img src='Frontend/src/assests/gmail.webp'></img>
            <Typography variant="h5" color="blue-gray" className="mb-2 text-white text-sm">
              Gmail
            </Typography>
          </CardBody>
          <CardFooter className="text-sm">
            <Button>Connect</Button>
          </CardFooter>
        </Card>
      </div>

      <div className='cards flex-row space-x-6 mt-8'>
          <Card className="w-80 h-30 flex-row place-content-around bg-gray-8">
          <CardBody>
            <img src='Frontend/src/assests/gmail.webp'></img>
            <Typography variant="h5" color="blue-gray" className="mb-2 text-white text-sm">
              Gmail
            </Typography>
          </CardBody>
          <CardFooter className="text-sm">
            <Button>Connect</Button>
          </CardFooter>
        </Card>
      </div>

      <div className='cards flex-row space-x-6 mt-8'>
          <Card className="w-80 h-30 flex-row place-content-around bg-gray-8">
          <CardBody>
            <img src='Frontend/src/assests/gmail.webp'></img>
            <Typography variant="h5" color="blue-gray" className="mb-2 text-white text-sm">
              Gmail
            </Typography>
          </CardBody>
          <CardFooter className="text-sm">
            <Button>Connect</Button>
          </CardFooter>
        </Card>
      </div>

      <div className='cards flex-row space-x-6 mt-8'>
          <Card className="w-80 h-30 flex-row place-content-around bg-gray-8">
          <CardBody>
            <img src='Frontend/src/assests/gmail.webp'></img>
            <Typography variant="h5" color="blue-gray" className="mb-2 text-white text-sm">
              Gmail
            </Typography>
          </CardBody>
          <CardFooter className="text-sm">
            <Button>Connect</Button>
          </CardFooter>
        </Card>
      </div>

      <div className='cards flex-row space-x-6 mt-8'>
          <Card className="w-80 h-30 flex-row place-content-around bg-gray-8">
          <CardBody>
            <img src='Frontend/src/assests/gmail.webp'></img>
            <Typography variant="h5" color="blue-gray" className="mb-2 text-white text-sm">
              Gmail
            </Typography>
          </CardBody>
          <CardFooter className="text-sm">
            <Button>Connect</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
    </div>
  )
}
