import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle, Rocket, Shield, Zap } from 'lucide-react';

export function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-100 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            <motion.div 
              className="lg:w-1/2 lg:pr-10"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                Build your SaaS faster with our starter kit
              </h1>
              <p className="mt-4 text-xl text-gray-600 max-w-2xl">
                Everything you need to launch your SaaS product. Authentication, payments, subscriptions, and more.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button size="lg" asChild>
                  <Link to="/register">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/pricing">View Pricing</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div 
              className="lg:w-1/2 mt-10 lg:mt-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="SaaS Dashboard" 
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Everything you need to build your SaaS
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Our starter kit includes all the essential features to get your SaaS up and running quickly.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <motion.div 
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Authentication</h3>
              <p className="mt-2 text-gray-600">
                Secure user authentication with email/password, social logins, and password reset functionality.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Subscription Management</h3>
              <p className="mt-2 text-gray-600">
                Integrated Stripe subscriptions with multiple pricing tiers, trials, and billing portal.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">User Dashboard</h3>
              <p className="mt-2 text-gray-600">
                Beautiful and responsive user dashboard with profile management and subscription details.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mt-4 text-xl text-white/80 max-w-2xl mx-auto">
              Join thousands of businesses already using our SaaS starter kit.
            </p>
            <div className="mt-8">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/register">Sign up for free</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Trusted by developers worldwide
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              See what our customers have to say about our SaaS starter kit.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <motion.div 
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 italic">
                "This starter kit saved me weeks of development time. I was able to launch my SaaS in record time."
              </p>
              <div className="mt-4 flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                  alt="Sarah Johnson" 
                  className="h-10 w-10 rounded-full"
                />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Sarah Johnson</p>
                  <p className="text-sm text-gray-500">Founder, Acme Inc</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 italic">
                "The integration with Stripe and Supabase is seamless. I was able to start accepting payments on day one."
              </p>
              <div className="mt-4 flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                  alt="Tom Wilson" 
                  className="h-10 w-10 rounded-full"
                />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Tom Wilson</p>
                  <p className="text-sm text-gray-500">CTO, TechStart</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 italic">
                "The code quality is excellent. It's well-structured and easy to customize for my specific needs."
              </p>
              <div className="mt-4 flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                  alt="Michael Brown" 
                  className="h-10 w-10 rounded-full"
                />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Michael Brown</p>
                  <p className="text-sm text-gray-500">Developer, Freelance</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
